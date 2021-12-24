import {React, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Filters.module.scss';
import {Button} from "../../UI/Button/Button";
import {Sprite} from '../../UI/Sprite/Sprite';

export const Filters = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const FILTERS = [
    'Hydroponic',
    'Flip',
    'AlienWorkshop',
    'Element',
  ];


  return <ul className={styles.Wrapper}>
    <li>
      <Button classname={`${styles.Button} ${styles.ClearFilters}`} custom={true} onClick={()=>{setSearchParams()}}>All</Button>
    </li>
    {FILTERS.map((filter)=>{

      return <li key={filter}>
        <Button classname={styles.Button} custom={true} onClick={()=>{
          //TODO отрефачить и сделать чтобы при повторном клике фильтр снимался (возможно переделать на чекбоксы)

          let arrayFilters = searchParams.getAll('filters');
          arrayFilters.indexOf(filter) !== -1 && arrayFilters.splice(arrayFilters.indexOf(filter), 1);

          return arrayFilters.indexOf(filter) === -1 ? setSearchParams({filters: [...arrayFilters, filter]}) : setSearchParams({filters: [...arrayFilters]});
        }}>
          <Sprite width={"100"} height={"50"} id={filter} fill={filter === 'Hydroponic' || 'AlienWorkshop' || 'Flip' ? "#FFFFFF" : null} className={styles.SvgIcon}/>
        </Button>
      </li>
    })}
  </ul>
};