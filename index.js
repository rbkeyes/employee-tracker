const init = async() => {
    try {
        const answers = await inquirer.prompt(mainMenu);
        console.log(answers.mainMenu)
    } catch (err) {
        console.error(err);
    }
}; 