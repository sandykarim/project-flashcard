import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../HomePage";
import Study from "../Deck/StudyFolder/StudyIndex";
import NotFound from "./NotFound";
import Header from "./Header";
import DeckEdit from "../Deck/DeckEdit";
import DeckView from "../Deck/DeckView";
import CardEdit from "../CardFolder/CardEdit";
import CardCreate from "../CardFolder/CardCreate";
import DeckCreate from "../Deck/DeckCreate";

function Layout() {
  return (
    <main>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default Layout;
