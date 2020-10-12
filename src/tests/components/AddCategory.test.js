import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require('enzyme');
const { AddCategory } = require('../../components/AddCategory');



describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // para inicializar el formulario antes de cada prueba. con esto me aseguro que el input value no tenga nada para la prueba deno posteo
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });


    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});  // no va el on 

        expect(wrapper.find('p').text().trim()).toBe(value);

    })
    
    test('No debe postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        // simulamos el inputChange
        input.simulate('change', {target: {value}});
        // simulamos el submot del formulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // revisamos de que se haya llamado setCategories
        expect(setCategories).toHaveBeenCalled();
        // o sino asi
        expect(setCategories).toHaveBeenCalledTimes(1);

        // sino tambien  estoy esperando que se haya llamado con cualquier tipo de funcion (para revisar que lo que se pasa es una función y no un simple parametro)
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );   


        // revisamos de que el texto sea ''
        expect(wrapper.find('p').text().trim()).toBe('');
        // o sino así tambien
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    



})












