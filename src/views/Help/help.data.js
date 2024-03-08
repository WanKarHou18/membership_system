import filterLoyaltyCard from '../../assets/images/help/filterCard/filter_loyalty_card.png'

import addLoyaltyCardIcon from '../../assets/images/help/addLoyaltyCard/add_icon.png'
import addCustomer from '../../assets/images/help/addLoyaltyCard/add_customer.png'
import deleteCustomer from '../../assets/images/help/addLoyaltyCard/delete_customer.png'
import editCustomerIcon from '../../assets/images/help/addLoyaltyCard/edit_customer_icon.png'
import showCardIcon from '../../assets/images/help/addLoyaltyCard/show_card_icon.png'
import downloadCardIcon from '../../assets/images/help/addLoyaltyCard/download_card_icon.png'
import copyPasteCard from '../../assets/images/help/addLoyaltyCard//copy_paste_card.png'
import setting from '../../assets/images/help/setting/setting.png'

/**
 * Description: Two levels of Accordion 
 */
export const helpData = 
[
    {
        summary: 'Customer Membership',
        isRoot: true,
        expandIcon: null,
        isNested: true,
        details: [
            {
                summary: 'Filter Loyalty Card',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'Different search/ filter functions for you to filter the data'},
                    {type:'Image',data:filterLoyaltyCard},
                ]
            },
            {
                summary: 'How to add customer loyalty card?',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'Press on the "Add" icon for your desired customer loyalty card'},
                    {type:'Image',data: addLoyaltyCardIcon},
                    {type:'Text',data:'Fill up the form, then press "Save" button'},
                    {type:'Image',data: addCustomer},
                ]
            },
            {
                summary: 'How to delete customer loyalty card?',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'Press on the "Delete" icon for your desired customer loyalty card'},
                    {type:'Image',data: deleteCustomer},
                  
                ]
            },
            {
                summary: 'How to edit customer online loyalty card?',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'Press on the "Edit" icon for your desired customer loyalty card'},
                    {type:'Image',data: editCustomerIcon},
                    {type:'Text',data:'Modify the form, then press "Save" button'},
                    {type:'Image',data: addCustomer},
                ]
            },
            {
                summary: 'How to share customer online loyalty card?',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'Press on the "Card" icon for your desired customer loyalty card'},
                    {type:'Image',data: showCardIcon},
                    {type:'Text',data:'Press on the "Download" icon for your desired customer loyalty card'},
                    {type:'Image',data: downloadCardIcon},
                    {type:'Text',data:'Open the image, copy & paste at your desired social media, then share it with your customer'},
                    {type:'Image',data: copyPasteCard},
                ]
            },
        ]
    },
    {
        summary: 'Setting',
        isRoot: true,
        expandIcon: null,
        isNested: true,
        details: [
            {
                summary: 'Loyalty Card Limit',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'In initial stage, given FREE loyalty card for each user is 25'},
                ]
            },
            {
                summary: 'Change Username / Shop Name',
                isRoot: false,
                expandIcon: null,
                isNested: false,
                details:[
                    {type:'Text',data:'Modify the Username / Shop Name field, then press "Save" button'},
                    {type:'Image',data: setting},
                ]
            },
        ]
    },
    {
        summary: 'Contact Us',
        isRoot: true,
        expandIcon: null,
        isNested: false,
        details: [
            {type:'Text',data:'Email: frenz7434@gmail.com'},
        ]
    },

]
