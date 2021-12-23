import React from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Filters.module.scss';
import {Button} from "../../UI/Button/Button";
import {Sprite} from '../../UI/Sprite/Sprite';

export const Filters = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get("user"));

  // const changeFilterHandler = () =>{
  //   setSearchParams({filter: });
  // };

  const FILTERS = [
    'Hydroponic',
    'Flip',
    'AlienWorkshop',
    'Element',
  ];

  let prevSearch,
    newSearch;

  const search = (filter) =>{
     prevSearch = searchParams.get('filters');
    console.log(prevSearch);

    // setSearchParams({filters: [...asd] + filter})
  };



  return <ul className={styles.Wrapper}>
    <li>
      <Button classname={`${styles.Button} ${styles.ClearFilters}`} custom={true} onClick={()=>{console.log('All')}}>All</Button>
    </li>
    {FILTERS.map((filter)=>{

      return <li key={filter}>
        <Button classname={styles.Button} custom={true} onClick={()=>{
          setSearchParams({filters: filter});
          search();
        }}>
          <Sprite width={"100"} height={"50"} id={filter} fill={filter === 'Hydroponic' || 'AlienWorkshop' || 'Flip'? "#FFFFFF" : null} className={styles.SvgIcon}/>
        </Button>
      </li>
    })}



    {/*<li>*/}
    {/*  <Button classname={styles.Button} custom={true} onClick={()=>{console.log('2')}}>*/}
    {/*    <Sprite width={"100"} height={"50"} id={"elem"}  className={styles.SvgIcon}/>*/}
    {/*  </Button>*/}
    {/*</li>*/}
    {/*<li>*/}
    {/*  <Button classname={styles.Button} custom={true} onClick={()=>{console.log('3')}}>*/}
    {/*    <Sprite width={"100"} height={"50"} id={"hy"} fill={"#FFFFFF"} className={styles.SvgIcon}/>*/}
    {/*  </Button>*/}
    {/*</li>*/}
    {/*<li>*/}
    {/*  <Button classname={styles.Button} custom={true} onClick={()=>{console.log('3')}}>*/}
    {/*    <Sprite width={"100"} height={"50"} id={"aw"} fill={"#FFFFFF"} className={styles.SvgIcon}/>*/}
    {/*  </Button>*/}
    {/*</li>*/}
  </ul>
};