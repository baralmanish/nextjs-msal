import { IconType } from 'react-icons';


// Define interface for icons
export interface IconsTypes {
    [key: string]: IconType;
}

// define interface for String object
export interface StringObjectTypes {
    [key: string]: string
}


// define interface for Nav data
export interface NavDataTypes {
    name : string
    path : string
}