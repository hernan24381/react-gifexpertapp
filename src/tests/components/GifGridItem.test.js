import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
const { GifGridItem } = require("../../components/GifGridItem");


describe('Pruebas de GifGridItem', () => {
    
    const titulo = 'Un Titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper  = shallow(<GifGridItem title={titulo} url={url} />);

    test('debe mostrar el componente corractamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    

    test('debe de tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
        
    })
    

    test('debe de tener la imagen igual a la url y alt de los props', () => {
        
        const img = wrapper.find('img');  // si tiene varias imagenes hay que poner el id por ejemplo o la clase
        //console.log(img.html());
        //console.log(img.props());

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);

    })
    
    test('debe de tener animate__fadeOut', () => {
        
        const div = wrapper.find('div');

        const className = div.prop('className');
        expect(className.includes('animate__fadeOut')).toBe(true);

        //expect(div.hasClass('animate__fadeOut')).toBe(true);
    })
    



})








