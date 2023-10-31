import './index.css';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';

export default function Value() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (itemIndex) => {
    if (activeItem === itemIndex) {
      // Se o item atualmente aberto é o mesmo que o que foi clicado, feche-o
      setActiveItem(null);
    } else {
      // Caso contrário, abra o item clicado
      setActiveItem(itemIndex);
    }
  };

  return (
    <section className='containerValue'>
      <div className='v-left'>
        <div className='imageContainer'>
          <img src="./value.png" alt="" />
        </div>
      </div>
      <div className="v-right">
        <span>Our value</span>
        <span>Value give to you</span>
        <span>Value give to you Value give to you Value give to you Value give to you</span>
        <Accordion className='accordion' allowMultipleExpanded={true} preExpanded={[activeItem]}>
          {data.map((item, i) => (
            <AccordionItem className='accordionItem' key={i} uuid={i}>
              <AccordionItemHeading>
                <AccordionItemButton
                  className='accordionButton'
                  onClick={() => toggleItem(i)}
                >
                  <div className='icon'>{item.icon}</div>
                  <span className='accordionText'>{item.heading}</span>
                  <div className='icon'>
                    <MdOutlineArrowDropDown size={20} />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="" style={{ color: '#8C8B8B', fontWeight: '500' }}>{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
