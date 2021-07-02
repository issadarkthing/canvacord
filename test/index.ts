import canvacord from "../index";

const img = "https://cdn.discordapp.com/embed/avatars/0.png";

const rank = new canvacord.Rank()
    .setAvatar(img)
    .setCurrentXP(50)
    .setRequiredXP(360)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername("Snowflake")
    .setDiscriminator("0007");

rank.build()
    .then(data => {
        canvacord.write(data, "RankCard.png");
    });
