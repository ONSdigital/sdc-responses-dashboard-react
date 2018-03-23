import React from "react";
import InfoPanel from "./index";
import { shallow } from "enzyme";

const createWrapper = (props, render = shallow) => {
  return render(<InfoPanel {...props} />);
};

describe("InfoPanel", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      type: "downloads",
      number: 400
    };

    wrapper = createWrapper(props);
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
