import * as Discord from "discord.js";
import * as Logger from "./../utils/logger";

export default async (Client: Discord.Client, error: Error) => {
	Logger.error(error.message);
};
