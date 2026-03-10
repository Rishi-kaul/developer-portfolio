import { localAI } from "@/data/localAI";

export function searchLocalAI(message){

const text = message.toLowerCase();

for(const item of localAI){

for(const keyword of item.keywords){

if(text.includes(keyword)){
return item.answer;
}

}

}

return null;

}