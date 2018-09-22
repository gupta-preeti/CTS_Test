import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";

describe("PearsonUsers", () => {
  let component;
  const user = {
    data: [
      {
        id: 1,
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
        id: 2,
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
        id: 3,
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      },
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }
    ]
  };

   const stateUsers = [
      {
        id: 3,
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      },
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }
    ];

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it("Should remove Duplicates", () => {
    const removeDuplicate = (newUser) => newUser.data.filter(v => stateUsers.some(s => s.id !== v.id));
    expect(removeDuplicate(user).length).toBe(4);
  })

  it("should delete user", () => {    
    const deleteUser = (user) => stateUsers.filter(v => v.id !== user);
    expect(deleteUser(3).length).toBe(1);
  });
});
