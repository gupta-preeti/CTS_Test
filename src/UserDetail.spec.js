import React from "react";
import { mount } from "enzyme";
import { UserDetail } from "./UserDetail";

describe("UserDetails", () => {
  let component;
  const userData = [{
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar:
    "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }];
  beforeEach(() => {
    component = mount(<UserDetail userData={userData} onDelete={()=> {}} />);
   });

  it("should render name", () => {    
    const title = component.find(".title");
    expect(title.text()).toEqual("Tracey Ramos");
  })
  it("should render avatar", () => {    
    const avatar = component.find(".pic img");
     expect(avatar.html()).toEqual("<img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg\" alt=\"Tracey\">");
  })
});
