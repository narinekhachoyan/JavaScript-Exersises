import { User } from '../models/user-model.js';
import JWT from 'jsonwebtoken';

import { makeHash, compare } from '../libs/crypto-lib.js';

const { SECRET } = process.env;

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userInfo = await User.find({ email });

        const [userParams] = userInfo;

        const user = await compare(password, userParams);

        if (!user) {
            throw new Error('You are not registered!!!');
        }

        const token = JWT.sign(
            { _id: userParams._id, email: userParams.email, username: userParams.username },
            SECRET,
            { expiresIn: '15d' }
        );
        res.status(201).send({ data: { email: userParams.email, username: userParams.username }, token });
    } catch (e) {
        res.status(404).send({ data: e.message });
    }
};

export const registration = async (req, res) => {
    try {
        const { username, email, password, repeatPassword } = req.body;

        if (password !== repeatPassword) {
            throw new Error('Passwords doesnt match');
        }

        const passwordHash = await makeHash(password);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        await newUser.save();
        res.status(201).send({ data: { username: newUser.username, email: newUser.email } });
    } catch (e) {
        res.status(401).send({ data: e.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = email ? await User.find({ email }) : await User.find({});
        res.status(201).send({data:user})
    } catch (e) {
        res.status(404).send({data: "Something went wrong!"})
    }
}