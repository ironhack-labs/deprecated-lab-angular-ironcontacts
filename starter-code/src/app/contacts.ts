import { NgFor } from "@angular/common";

const contacts: Object[] = [
  {
    name: "Shakira Robel",
    email: "Ashley_Ritchie@hotmail.com",
    phoneNumber: "965-144-6018",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Green Crist",
    email: "Rosendo53@hotmail.com",
    phoneNumber: "1-522-714-2638 x44811",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Yvette Dickinson",
    email: "Yolanda.Abernathy@hotmail.com",
    phoneNumber: "(038) 030-9641 x7086",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Karley Hackett",
    email: "Icie_Gutmann69@yahoo.com",
    phoneNumber: "(251) 436-6001",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Mrs. Otha Beahan",
    email: "Brice46@yahoo.com",
    phoneNumber: "005-851-7095 x72027",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Ignacio Larson",
    email: "Remington.Boyer63@yahoo.com",
    phoneNumber: "1-471-836-5871 x5841",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Estel Armstrong",
    email: "Chasity.Metz83@gmail.com",
    phoneNumber: "(247) 305-7427",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Citlalli Brown",
    email: "Izabella.Hand21@gmail.com",
    phoneNumber: "475.071.4608 x101",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Reginald Kessler",
    email: "Retta.Wolf@gmail.com",
    phoneNumber: "070-610-2661",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Rosina Schiller",
    email: "Rachelle13@hotmail.com",
    phoneNumber: "869.014.6216 x103",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Annabell Kreiger DVM",
    email: "Kamron_Kilback24@gmail.com",
    phoneNumber: "537.485.6536",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Sister Langworth",
    email: "Mauricio.Predovic@yahoo.com",
    phoneNumber: "1-728-795-5036 x191",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Walton Cormier",
    email: "Markus25@gmail.com",
    phoneNumber: "1-218-030-7101",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Mrs. Jed Anderson",
    email: "Shawn.Howell62@hotmail.com",
    phoneNumber: "1-195-147-1917",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Sam Ledner",
    email: "Chase48@hotmail.com",
    phoneNumber: "701.023.2667 x499",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Jayson Conroy",
    email: "Ayana_Deckow38@gmail.com",
    phoneNumber: "1-130-094-5404",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Libbie Kub",
    email: "Reymundo_Brekke96@hotmail.com",
    phoneNumber: "1-632-280-6526",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Tomasa Tillman",
    email: "Jordane.Wunsch@yahoo.com",
    phoneNumber: "1-946-558-9080 x542",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Rusty Tremblay MD",
    email: "Shana3@yahoo.com",
    phoneNumber: "773.001.9806",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Nina Beer",
    email: "Devon.Aufderhar74@yahoo.com",
    phoneNumber: "042.181.5876",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Wayne Schaden",
    email: "Augustine46@yahoo.com",
    phoneNumber: "820-288-0927 x964",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Arvel Gorczany",
    email: "Nadia.Paucek@yahoo.com",
    phoneNumber: "037.974.9471",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Carrie Connelly",
    email: "Abigail40@yahoo.com",
    phoneNumber: "1-150-622-5789 x634",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },

  {
    name: "Coty Grady",
    email: "Lenny_Ziemann@hotmail.com",
    phoneNumber: "(905) 672-3625 x6378",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  }
]

export default contacts;
