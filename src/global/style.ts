import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0,
    box-sizing: border-box
}

@media (max-width: 426px) {
    body {
        position: absolute;
        max-width: 426px;
        max-height: 644px;
        background:  #DDDDDD;
        width: 100%;
    }
};
@media (min-width: 427px) and (max-width: 767px) {
    body {
        position: absolute;
        max-width: 767px;
        max-height: 644px;
        background:  #DDDDDD;
        width: 100%;
    }
};
@media (min-width: 768px) and (max-width: 1445px) {
    body {
        position: absolute;
        max-width: 1445px;
        
        background:  #DDDDDD;
        width: 100%;
        
    }
};
`;