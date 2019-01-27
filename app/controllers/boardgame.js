import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createBoardGame() {
      let newBoardGameValue = this.get('newBoardGame')
      let newBoardGame = this.store.createRecord('boardgame', {
        title: newBoardGameValue
      });
      newBoardGame.save().then(() => {
        this.transitionToRoute('boardgame');
      });

    },
    destroyBoardGame(model){
      model.destroyRecord().then(() => {
        this.transitionToRoute('boardgame');
      });
    }
  }
});
