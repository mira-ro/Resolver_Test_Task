//This test spec was created with a help of Page Object Modal
//POM - is a design pattern that creates an object repository for storing  web elements.
// It minimizes the code, enhances its readability.
// Can be used for different web pages
//The tests are created in the same way as in test.spec.js, but  selectors and methods
// are stored in the class, which is imported below.

import HomePage from "../pages/home.page";

describe("Home Page", () => {
  beforeEach("Open Home Page", () => {
    HomePage.open();
  });
  describe("Test 1", () => {
    it("Email validation", () => {
      HomePage.inputEmail.should("be.visible").type("fake@data.com");
    });
    it("Password validation", () => {
      HomePage.inputPassword.should("be.visible").type("qwerty123");
    });
    it("Login button validation", () => {
      HomePage.buttonLogin.should("be.visible");
    });
  });
  describe("Test 2", () => {
    it("Values of list group", () => {
      HomePage.list.find(".list-group-item").should("have.length", 3);
    });
    it("Second list item", () => {
      HomePage.list
        .find(".list-group-item")
        .eq(1)
        .should("contain", "List Item 2");
    });
    it("Second list item*s badge", () => {
      HomePage.list
        .find(".list-group-item")
        .eq(1)
        .find(".badge")
        .should("have.text", "6");
    });
  });
  describe("Test 3", () => {
    it("Text validation", () => {
      HomePage.dropdownMenu.should("contain.text", "Option 1");
    });
    it("Text validation", () => {
      HomePage.dropdownMenu.click();
      HomePage.dropdownMenuList.find(".dropdown-item").eq(2).click();
      HomePage.dropdownMenu.should("have.text", "Option 3");
    });
  });
  describe("Test 4", () => {
    it("Enabled button validation", () => {
      HomePage.testForm4.find(".btn").should("be.enabled");
    });
    it("Disabled button validation", () => {
      HomePage.testForm4.find(".btn").should("be.disabled");
    });
  });

  describe("Test 5", () => {
    it("Success message validation", () => {
      HomePage.testForm5Button.wait(11000).click();
      HomePage.testForm5ButtonMessage.should(
        "contain.text",
        "You clicked a button!"
      );
    });
    it("Disabled button validation", () => {
      HomePage.testForm5Button.wait(11000).click();
      HomePage.testForm5Button.should("be.disabled");
    });
  });
  describe("Test 6", () => {
    function findCell(y, x) {
      return HomePage.grid.find("tbody").find("tr").eq(y).find("td").eq(x);
    }

    it("Validation of the cell value", () => {
      findCell(2, 2).should("contain", "Ventosanzap");
    });
  });
});
