function extract(content) {
    const element = document.getElementById(content);
    const text = element.textContent;
    const regex = /\((.*?)\)/g;
    const matches = text.match(regex);

    if (!matches) {
        return '';
    }

    return matches.join('; ');

}

