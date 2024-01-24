import { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} from "discord.js";
import Modal from "../../Structures/Modal";
import SlashCommand from "../../Structures/SlashCommand";
import SelectMenu from "../../Structures/SelectMenu";
import { DuoModal } from "./duoModal";



const slashCommandBuilder = new SlashCommandBuilder()
    .setName('구인글작성')
    .setDescription('듀오 할사람!!')

    const Command = new SlashCommand(slashCommandBuilder, async (bot, interaction) => {
        if (!interaction.inCachedGuild()) return;
		await interaction.showModal(DuoModal);
});
export default Command;