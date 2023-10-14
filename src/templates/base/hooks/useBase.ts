import React from "react";
import useMediaQuery from "hooks/useMediaQuery";
import * as actionTypesMediaQuery from 'constants/media-query-constants';
import {useBaseContext} from "context/base-context";

const useBase = () => {
   const [{menu_left_visible, toggle_menu_left_visible, toggle_menu_visible}, actions] = useBaseContext();

   const huge_one = useMediaQuery({ queryValue: '(min-width: 1100px)', initialValue: false });
   const huge = useMediaQuery({ queryValue: '(max-width: 1099px) and (min-width: 950px)', initialValue: false });
   const big = useMediaQuery({ queryValue: '(max-width: 949px) and (min-width: 650px)', initialValue: false });
   const medium = useMediaQuery({ queryValue: '(max-width: 649px) and (min-width: 541px)', initialValue: false });
   const small = useMediaQuery({ queryValue: '(max-width: 540px)  and (min-width: 250px)', initialValue: false });
   
  const size = huge_one? actionTypesMediaQuery.HUGE_ONE: huge ? actionTypesMediaQuery.HUGE : big ? actionTypesMediaQuery.BIG : medium ? actionTypesMediaQuery.MEDIUM : small ? actionTypesMediaQuery.SMALL : null;

  React.useEffect(() => {
   actions.setSize(size);
   actions.setMenuRightVisible();
  },[]);

  return {
    menu_left_visible,
    toggle_menu_left_visible,
    toggle_menu_visible,
    actions,
  }
};
export default useBase;