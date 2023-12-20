import "./LanguageSwitch.scss";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "../../../components/ui/select";

function LanguageSwitch(props) {
   const { options, onClick } = props;
   return (
      <div>
         <Select>
            <SelectTrigger className="w-[100px] mr-[40px]">
               <SelectValue placeholder="Uzbek" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="uz">Uzbek</SelectItem>
               <SelectItem value="en">English</SelectItem>
               <SelectItem value="ru">Russian</SelectItem>
            </SelectContent>
         </Select>
      </div>
   );
}

export default LanguageSwitch;
