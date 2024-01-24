import { ActionRowBuilder, ModalBuilder, StringSelectMenuComponent, TextInputBuilder, TextInputStyle, EmbedBuilder, User, userMention, Guild } from "discord.js";
import Modal from "../../Structures/Modal";

export const DuoModal = new ModalBuilder()
  .setCustomId("duo")
  .setTitle("[ 듀오 ]")
  .setComponents(
    [
      new ActionRowBuilder<TextInputBuilder>()
        .addComponents(
          new TextInputBuilder()
            .setCustomId('gameid')
            .setLabel("[ 게임아이디 ]")
            .setStyle(TextInputStyle.Short)
            .setMaxLength(30)
            .setPlaceholder('Hide on bush#KR1')
        ),
      new ActionRowBuilder<TextInputBuilder>()
        .addComponents(
          new TextInputBuilder()
            .setCustomId('gametier')
            .setLabel("[ 게임 티어 ]")
            .setStyle(TextInputStyle.Short)
            .setMaxLength(6)
            .setPlaceholder('챌린저')
        ),
      new ActionRowBuilder<TextInputBuilder>()
        .addComponents(
          new TextInputBuilder()
            .setCustomId('gamepos')
            .setLabel("[ 포지션 ]")
            .setStyle(TextInputStyle.Short)
            .setMaxLength(2)
            .setPlaceholder('탑 / 정글 / 미드 / 원딜 / 서폿')
        ),
        new ActionRowBuilder<TextInputBuilder>()
        .addComponents(
          new TextInputBuilder()
            .setCustomId('gametext')
            .setLabel("[ 구인글 ]")
            .setStyle(TextInputStyle.Paragraph)
            .setMaxLength(100)
            .setPlaceholder('같이 할 듀오 구해요!')
            .setValue('같이 할 듀오 구해요!')
        )
    ]
  ) // 컴포넌트 설정

const modal = new Modal('duo', DuoModal, async function (bot, interaction) {
  if (!interaction.isModalSubmit()) return;
  const gameid = interaction.fields.getTextInputValue('gameid');
  const gametier = interaction.fields.getTextInputValue('gametier');
  const gamepos = interaction.fields.getTextInputValue('gamepos');
  const gametext = interaction.fields.getTextInputValue('gametext');

  const embed = new EmbedBuilder()
      .setColor("#fcae4e")
      .setTitle('리그오브레전드 할사람 !')
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTFmjct_8m5BHMdzzGknc0xQkeO62NWhjBA&usqp=CAU')
      .addFields(
        { name: "| 작성자", value: `<@${interaction.member?.user.id}>`, inline: false},
        { name: "| 닉네임", value: gameid, inline: false},
        { name: "| 티어", value: gametier, inline: false},
        { name: "| 포지션", value: gamepos, inline: false},
        { name: "| 구인글", value: gametext, inline: false},
      )
      .setTimestamp();

  if (!['탑','미드','정글','원딜','서폿'].includes(gamepos)) {
    await interaction.reply({ content: '존재하지 않는 라인입니다', ephemeral: true})
  }

  if (!['아이언','브론즈','실버','골드','플레티넘','에메랄드','다이아','마스터','그랜드마스터','챌린저'].includes(gametier)) {
    await interaction.reply({ content: '존재하지 않는 티어입니다', ephemeral: true})
  }
  await interaction.reply({ embeds: [embed] });
})

export default modal;