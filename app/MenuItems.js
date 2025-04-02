import * as React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

import LittleLemonHeader from '../components/LittleLemonHeader';
import LittleLemonFooter from '../components/LittleLemonFooter';

export default function MenuItems() {
    const menuItemsToDisplay = [
        {
            title: 'Appetizers',
            data: [
                { name: 'Hummus', price: '$5.00' },
                { name: 'Moutabal', price: '$5.00' },
                { name: 'Falafel', price: '$7.50' },
                { name: 'Marinated Olives', price: '$5.00' },
                { name: 'Kofta', price: '$5.00' },
                { name: 'Eggplant Salad', price: '$8.50' },
            ],
        },
        {
            title: 'Main Dishes',
            data: [
                { name: 'Lentil Burger', price: '$10.00' },
                { name: 'Smoked Salmon', price: '$14.00' },
                { name: 'Kofta Burger', price: '$11.00' },
                { name: 'Turkish Kebab', price: '$15.50' },
            ],
        },
        {
            title: 'Sides',
            data: [
                { name: 'Fries', price: '$3.00', id: '11K' },
                { name: 'Buttered Rice', price: '$3.00' },
                { name: 'Bread Sticks', price: '$3.00' },
                { name: 'Pita Pocket', price: '$3.00' },
                { name: 'Lentil Soup', price: '$3.75' },
                { name: 'Greek Salad', price: '$6.00' },
                { name: 'Rice Pilaf', price: '$4.00' },
            ],
        },
        {
            title: 'Desserts',
            data: [
                { name: 'Baklava', price: '$3.00' },
                { name: 'Tartufo', price: '$3.00' },
                { name: 'Tiramisu', price: '$5.00' },
                { name: 'Panna Cotta', price: '$5.00' },
            ],
        },
    ];

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    const Item = ({ name, price }) => (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    );

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={menuStyles.headerText}>{title} </Text>
    );

    return (
        <View style={menuStyles.container}>
            <SectionList 
            sections={menuItemsToDisplay} 
            renderItem={renderItem} 
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => item + index}>
            </SectionList>
        </View>
    );
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    headerText: {
        fontSize: 26,
        color: 'black',
        backgroundColor: '#F4CE14',
        textAlign: 'center'
    }
});