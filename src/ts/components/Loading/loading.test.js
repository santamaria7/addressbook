import renderer from "react-test-renderer";
import React from "react";
import Loading from "./index";


describe('user details', function(){
    it('should render the user details with mock data',function(){

        const component = renderer.create(<Loading />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})