import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onInput={handleInput}
      placeholder="Filter by Name"
      className="user-input"
    />
  );
};

export default SearchBox;
