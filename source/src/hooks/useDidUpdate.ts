import { useEffect, useRef } from 'react';

export const useDidUpdate = (param: any, fnCallBack: Function) => {
    const bFisrt = useRef(true);

	useEffect(() => {
		if (bFisrt.current) {
            bFisrt.current = false;
        } else {
            // didupdate
            fnCallBack();
        }
	}, [param]);
};
