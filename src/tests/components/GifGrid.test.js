import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas de <GifGrid />', () => {
    
    const category = 'samurai x';
    
    test('debe hacer match con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'http://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    



})




