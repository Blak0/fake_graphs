function writeCenteredText(parent_pos, str, fontSize) {
    let textX = parent_pos.x - textWidth(str.toString()) / 2;
    let textY = parent_pos.y + fontSize / 2
    textSize(fontSize);
    text(str, textX, textY);
}