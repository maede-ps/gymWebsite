import {SiOpenaigym} from 'react-icons/si'
import image2 from './Images/nutrition2.jpg'
import image3 from './Images/nutrition3.jpg'
import image4 from './Images/nutrition4.jpg'

export const links =[
    {
        name : "Home",
        path: '/'
    },
    {
        name : "About",
        path: '/about'
    },
    {
        name : "Gallery",
        path: '/gallery'
    },
    {
        name : "Plans",
        path: '/plans'
    },
    {
        name : "Trainers",
        path: '/trainers'
    },
    {
        name : "Contact",
        path: '/contact'
    },
]

export const programs =[
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/program/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/program/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/program/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/program/444"
    },
]

export const values=[
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "anything goes in the mind be like a bullshit to be eaten and not forgiven!!!!"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "anything goes in the mind be like a bullshit to be eaten and not forgiven!!!!"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "anything goes in the mind be like a bullshit to be eaten and not forgiven!!!!"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "anything goes in the mind be like a bullshit to be eaten and not forgiven!!!!"
    },
]

export const faqs=[
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi" + 
        "Iste cum maxime explicabo consequuntur qui rem ipsum at dolor." +
        "Tempore commodi quaerat, tenetur amet vitae est similique enim quam."
    },
    {
        id: 2,
        question: "What time of the day is best to work out?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi" + 
        "Iste cum maxime explicabo consequuntur qui rem ipsum at dolor." +
        "Tempore commodi quaerat, tenetur amet vitae est similique enim quam."
    },
    {
        id: 3,
        question: "How long should any workouts be?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi" + 
        "Iste cum maxime explicabo consequuntur qui rem ipsum at dolor." +
        "Tempore commodi quaerat, tenetur amet vitae est similique enim quam."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi" + 
        "Iste cum maxime explicabo consequuntur qui rem ipsum at dolor." +
        "Tempore commodi quaerat, tenetur amet vitae est similique enim quam."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi" + 
        "Iste cum maxime explicabo consequuntur qui rem ipsum at dolor." +
        "Tempore commodi quaerat, tenetur amet vitae est similique enim quam."
    },
    {
        id: 6,
        question: "Should I lift weights for strenght training?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi" + 
        "Iste cum maxime explicabo consequuntur qui rem ipsum at dolor." +
        "Tempore commodi quaerat, tenetur amet vitae est similique enim quam."
    },
]

export const testimonials =[
    {
        id:1,
        name: "Diana Ayi",
        quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, officiis."+
       " Praesentium nisi voluptatibus sint assumenda minus veritatis quaerat consequuntur laboriosam!"+
       "Quisquam cupiditate accusantium qui, temporibus doloribus itaque exercitationem nemo minus?",
       job: "Student",
       avatar: require('./Images/avatar1.webp')
    },
    {
        id:2,
        name: "John Morphy",
        quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, officiis."+
       " Praesentium nisi voluptatibus sint assumenda minus veritatis quaerat consequuntur laboriosam!"+
       "Quisquam cupiditate accusantium qui, temporibus doloribus itaque exercitationem nemo minus?",
       job: "Developer",
       avatar: require('./Images/avatar2.jpg')
    },
    {
        id:3,
        name: "Ryan Billy",
        quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, officiis."+
       " Praesentium nisi voluptatibus sint assumenda minus veritatis quaerat consequuntur laboriosam!"+
       "Quisquam cupiditate accusantium qui, temporibus doloribus itaque exercitationem nemo minus?",
       job: "Master",
       avatar: require('./Images/avatar3.jpg')
    },
    {
        id:4,
        name: "Molly Morgan",
        quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, officiis."+
       " Praesentium nisi voluptatibus sint assumenda minus veritatis quaerat consequuntur laboriosam!"+
       "Quisquam cupiditate accusantium qui, temporibus doloribus itaque exercitationem nemo minus?",
       job: "Employer",
       avatar: require('./Images/avatar4.jpg')
    },
    {
        id:5,
        name: "Canno Doyle",
        quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, officiis."+
       " Praesentium nisi voluptatibus sint assumenda minus veritatis quaerat consequuntur laboriosam!"+
       "Quisquam cupiditate accusantium qui, temporibus doloribus itaque exercitationem nemo minus?",
       job: "Entreprenaur",
       avatar: require('./Images/avatar5.jpg')
    }
]

export const plans=[
    {
        id:1,
        name: "Silver Package",
        desc: "This package is perfect for beginners who need constant help",
        price: 29.99,
        features: [
            {feature: 'First Feature', avalailable: true},
            {feature: 'Second Feature', avalailable: true},
            {feature: 'Third Feature', avalailable: true},
            {feature: 'Forth Feature', avalailable: false},
            {feature: 'Fifth Feature', avalailable: false},
            {feature: 'Sixth Feature', avalailable: true},
            {feature: 'Sevetnth Feature', avalailable: false},
            {feature: 'Eigth Feature', avalailable: true},
            {feature: 'Nineth Feature', avalailable: false},
            {feature: 'Tenth Feature', avalailable: true},
            {feature: 'Eleventh Feature', avalailable: true},
        ]
    },
    {
        id:2,
        name: "Gold Package",
        desc: "This is a package for beginners who know what they're doing",
        price: 49.99,
        features: [
            {feature: 'First Feature', avalailable: true},
            {feature: 'Second Feature', avalailable: true},
            {feature: 'Third Feature', avalailable: true},
            {feature: 'Forth Feature', avalailable: false},
            {feature: 'Fifth Feature', avalailable: false},
            {feature: 'Sixth Feature', avalailable: true},
            {feature: 'Sevetnth Feature', avalailable: false},
            {feature: 'Eigth Feature', avalailable: true},
            {feature: 'Nineth Feature', avalailable: false},
            {feature: 'Tenth Feature', avalailable: true},
            {feature: 'Eleventh Feature', avalailable: true},
        ]
    },
    {
        id:3,
        name: "Platinum Package",
        desc: "This package is perfect for busy people who need home service",
        price: 89.99,
        features: [
            {feature: 'First Feature', avalailable: true},
            {feature: 'Second Feature', avalailable: true},
            {feature: 'Third Feature', avalailable: true},
            {feature: 'Forth Feature', avalailable: false},
            {feature: 'Fifth Feature', avalailable: false},
            {feature: 'Sixth Feature', avalailable: true},
            {feature: 'Sevetnth Feature', avalailable: false},
            {feature: 'Eigth Feature', avalailable: true},
            {feature: 'Nineth Feature', avalailable: false},
            {feature: 'Tenth Feature', avalailable: true},
            {feature: 'Eleventh Feature', avalailable: true},
        ]
    },
]

const person1= require('./Images/g2.jpg')
const person2= require('./Images/g3.jpg')
const person3= require('./Images/g4.jpg')
const person4= require('./Images/g5.jpg')
const person5= require('./Images/g6.jpg')
const person6= require('./Images/g7.jpg')

export const trainers=[
    {
        id: 1,
        image: person1,
        name: 'John Doe',
        job: 'Aerobiic Trainer',
        socials: ['https://instagram.com/','https://twitter.com/','https://facebook.com/','https://linkedin.com/']
    },
    {
        id: 2,
        image: person2,
        name: 'John Doe',
        job: 'Aerobiic Trainer',
        socials: ['https://instagram.com/','https://twitter.com/','https://facebook.com/','https://linkedin.com/']
    },
    {
        id: 3,
        image: person3,
        name: 'John Doe',
        job: 'Aerobiic Trainer',
        socials: ['https://instagram.com/','https://twitter.com/','https://facebook.com/','https://linkedin.com/']
    },
    {
        id: 4,
        image: person4,
        name: 'John Doe',
        job: 'Aerobiic Trainer',
        socials: ['https://instagram.com/','https://twitter.com/','https://facebook.com/','https://linkedin.com/']
    },
    {
        id: 5,
        image: person5,
        name: 'John Doe',
        job: 'Aerobiic Trainer',
        socials: ['https://instagram.com/','https://twitter.com/','https://facebook.com/','https://linkedin.com/']
    },
    {
        id: 6,
        image: person6,
        name: 'John Doe',
        job: 'Aerobiic Trainer',
        socials: ['https://instagram.com/','https://twitter.com/','https://facebook.com/','https://linkedin.com/']
    },
]

export const newsLetters=[
    {
        id:1,
        group: "Nutrition",
        title: "Vitamins and Proteins",
        content: ":  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, cupiditate!"+
         "Non eum quidem ipsa omnis atque, ullam incidunt minus nesciunt."+
        "Nesciunt provident pariatur incidunt hic tenetur non voluptates, minus sed!",
        image: image2
    },
    {
        id:2,
        group: "Mental Health",
        title: "Healthy mind",
        content: ":  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, cupiditate!"+
         "Non eum quidem ipsa omnis atque, ullam!",
         image:image3
    },
    {
        id:3,
        group: "Food Varieties",
        title: "Do you eat ALL you need?",
        content: ":  Lorem ipsum, dolor sit amet elit. Placeat, cupiditate!"+
        "Nesciunt provident pariatur incidunt hic tenetur non voluptates, minus sed!",
        image: image4
    }
]