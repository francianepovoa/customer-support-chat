import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
	async create(email: string) {
		const usersRepository = getCustomRepository(UsersRepository);

		//Select * from settings where username = "username" limit 1;
		const userExists = await usersRepository.findOne({});

		if (userExists) {
			throw new Error("User already exists!");
		}

		const users = usersRepository.create({});

		await usersRepository.save(users);

		return users;
	}
}

export { UsersService };
