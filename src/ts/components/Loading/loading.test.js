import renderer from "react-test-renderer";
import React from "react";
import Loading from "./index";


describe('Loading Component', function(){
    it('should render the loading component',function(){

        const component = renderer.create(<Loading />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})