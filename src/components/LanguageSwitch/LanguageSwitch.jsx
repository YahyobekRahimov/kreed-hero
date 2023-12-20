// import "./LanguageSwitch.scss";
import { SelectItem, Select } from "@nextui-org/react";

function LanguageSwitch(props) {
   const { options, onClick } = props;
   const optionList = options.map((el, index) => {
      return (
         <SelectItem
            style={{
               backgroundColor: "white",
               width: "100px",
               height: "40px",
            }}
            key={el.value}
            value={el.value}
         >
            {el.name}
         </SelectItem>
      );
   });
   return (
      <div>
         <Select
            style={{
               backgroundColor: "white",
               width: "100px",
               listStyleType: "none",
            }}
            defaultSelectedKeys={["en"]}
            className="language-switch max-w-xs"
            aria-label="choose language"
            color="black"
            variant="flat"
         >
            {optionList}
         </Select>
      </div>
   );
}

export default LanguageSwitch;
