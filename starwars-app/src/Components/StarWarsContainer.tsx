import "./../index.scss";
import { AppHeader } from "./AppHeader";
import { CharacterList } from "./CharacterList";
import { ChangeEvent, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { PersonDetail } from "./PersonDetail";
import { SearchContext } from "../contexts";

export const StarWarsContainer = () => {
  const [searchValue, setSerchValue] = useState<string>("");

  const onSerchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSerchValue(value);
  };

  return (
    <div className="app-wrapper">
      <SearchContext.Provider value={{ value: searchValue, onSearchTextChange: onSerchChange }}>
        <AppHeader />
        <Route exact path="/page/" component={CharacterList}>
          {() => <Redirect to="/page/1" />}
        </Route>
        <Route path="/page/:pageid" component={CharacterList} />
        <Route path="/contact" component={ContactForm}></Route>
        <Route path="/favorities" component={CharacterList}></Route>
        <Route path="/detail/:personid" component={PersonDetail}></Route>
      </SearchContext.Provider>
    </div>
  );
};
