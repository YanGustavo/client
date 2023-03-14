import React from "react";
import useMediaQuery from "hooks/useMediaQuery";
import * as actionTypesMediaQuery from 'constants/media-query-constants';
import {useBaseContext} from "context/base-context";

const useBase = () => {
  const [ actions] = useBaseContext();

  const huge_one = useMediaQuery('(min-width: 1100px)');
  const huge = useMediaQuery('(max-width: 1099px) and (min-width: 950px)');
  const big = useMediaQuery('(max-width: 949px) and (min-width: 650px)');
  const medium = useMediaQuery('(max-width: 649px) and (min-width: 541px)');
  const small = useMediaQuery('(max-width: 540px)  and (min-width: 250px)');
  const size = huge_one? actionTypesMediaQuery.HUGE_ONE: huge ? actionTypesMediaQuery.HUGE : big ? actionTypesMediaQuery.BIG : medium ? actionTypesMediaQuery.MEDIUM : small ? actionTypesMediaQuery.SMALL : null;

  React.useEffect(() => {
   actions.setSize(size);
  },[size, actions]);
};
export default useBase;