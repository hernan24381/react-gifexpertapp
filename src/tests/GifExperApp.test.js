import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExperApp } from '../GifExperApp';


describe('pruebas sobre Gif', () => {   
    
    test('debe hacer match con el snapshot', () => {
        
        const wrapper = shallow(<GifExperApp />);
        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['one punch', 'dragon ball'];
        const wrapper = shallow(<GifExperApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    


})




