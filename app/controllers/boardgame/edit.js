import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    updateBoardGame(){
      let newValue = this.updatedTitle;
      let boardgame = this.model;
      boardgame.set('title', newValue);
      boardgame.save().then(() => {
        this.transitionToRoute('boardgame');
      });
    }
  }
});
