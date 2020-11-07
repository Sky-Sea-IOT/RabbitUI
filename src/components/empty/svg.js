const getEmptyImg = (n) => {
    switch (n) {
        case "simple":
            return `
            <svg class="icon" viewBox="0 0 1639 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36804" width="124" height="81"><path d="M0 423.96127c106.673552-133.34194 180.964061-164.77254 321.925541-220.014201s49.527006-114.293091 133.34194-121.912631 106.673552-74.290509 123.817516 16.191521 142.866364-142.866364 179.059176-66.67097 128.579728 33.335485 220.966644 38.097697S1186.743266-56.069714 1253.414236 28.697662c66.67097 84.767376 235.25328 393.358723 385.739184 393.358723L0 423.96127z" fill="#F7F7F7" p-id="36805"></path><path d="M281.922959 909.706909a542.892184 114.293091 0 1 0 1085.784369 0 542.892184 114.293091 0 1 0-1085.784369 0Z" fill="#F7F7F7" p-id="36806"></path><path d="M1167.694418 623.97418l-142.866365-228.586183h-400.02582l-142.866364 228.586183h236.205722v57.146546h228.586183v-57.146546z" fill="#FFFFFF" p-id="36807"></path><path d="M481.935869 623.97418v285.732729h685.758549v-285.732729H946.727774v57.146546h-228.586183v-57.146546z" fill="#F7F7F7" p-id="36808"></path><path d="M1171.504187 621.116853l-142.866364-228.586183c-0.952442-0.952442-2.857327-1.904885-3.80977-1.904885h-400.02582c-1.904885 0-2.857327 0.952442-3.809769 1.904885l-142.866365 228.586183v288.590056c0 2.857327 1.904885 4.762212 4.762212 4.762212h685.758549c2.857327 0 4.762212-1.904885 4.762212-4.762212v-285.732729c-0.952442-0.952442-0.952442-1.904885-1.904885-2.857327zM627.659561 400.150209h394.311165l137.15171 219.061759H946.727774c-2.857327 0-4.762212 1.904885-4.762212 4.762212V676.358513h-219.061758v-52.384333c0-2.857327-1.904885-4.762212-4.762213-4.762212H490.507851l137.15171-219.061759z m535.272645 504.794487h-676.234125V628.736392h226.681298v52.384334c0 2.857327 1.904885 4.762212 4.762212 4.762212h228.586183c2.857327 0 4.762212-1.904885 4.762212-4.762212V628.736392h211.44222v276.208304z" fill="#E2E2E2" p-id="36809"></path></svg>
       `;

        case "default":
            return `
         <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32332" width="200" height="200"><path d="M18.235616 915.989041C18.235616 976.306849 238.465753 1024 512 1024s493.764384-47.693151 493.764384-108.010959S785.534247 807.978082 512 807.978082 18.235616 855.671233 18.235616 915.989041z" fill="#EEF1F8" opacity=".5" p-id="32333"></path><path d="M858.476712 723.813699l-114.323287-275.638357H279.846575l-114.323287 275.638357h-2.80548v232.153424h699.265754v-232.153424h-3.50685z" fill="#EEF1F8" p-id="32334"></path><path d="M861.983562 955.265753H162.016438v-232.153424h2.80548l114.323287-275.638356h465.00822l114.323287 275.638356h2.10411l0.70137 6.312329 0.70137 225.841095zM175.342466 942.641096h673.315068v-209.709589l-112.920548-271.430137H288.263014L175.342466 732.931507v209.709589z" fill="#DBDDE8" p-id="32335"></path><path d="M285.457534 627.024658l-108.712329 308.602739 14.027398 4.909589 108.712329-308.602739-14.027398-4.909589z m467.813699 0l108.712329 308.602739-14.027398 4.909589-108.712328-308.602739 14.027397-4.909589z" fill="#DBDDE8" p-id="32336"></path><path d="M439.057534 716.8H162.016438v239.167123h699.265754v-239.167123H584.942466c0.70137 26.652055-13.326027 51.90137-36.471233 65.227397-22.443836 13.326027-50.49863 13.326027-73.643836 0-22.443836-13.326027-35.769863-38.575342-35.769863-65.227397z" fill="#FFFFFF" p-id="32337"></path><path d="M861.983562 955.265753H162.016438v-239.167123h276.339726l0.70137 6.312329c2.805479 38.575342 35.068493 68.734247 72.942466 68.734246s69.435616-30.158904 72.942466-68.734246l0.70137-6.312329h276.339726v239.167123zM175.342466 941.939726h673.315068v-211.813699H596.865753c-6.312329 42.082192-42.783562 74.345205-84.865753 74.345206s-78.553425-32.263014-84.865753-74.345206H175.342466v211.813699z m641.753424-763.090411l104.50411 44.887671L980.515068 0l-163.419178 178.849315zM980.515068 0L697.863014 134.663014l89.073972 44.887671L980.515068 0z m-163.419178 194.279452v74.345206l44.887672-44.887672-44.887672-29.457534z" fill="#DBDDE8" p-id="32338"></path><path d="M281.249315 448.175342H757.479452v209.00822H281.249315V448.175342z" fill="#EAEDF7" p-id="32339"></path><path d="M757.479452 657.183562H281.249315V448.175342H757.479452v209.00822z m-462.90411-13.326028h449.578083v-182.356164H294.575342v182.356164z" fill="#DBDDE8" p-id="32340"></path><path d="M411.00274 581.435616c9.117808-4.208219 17.534247-9.117808 26.652055-13.326027 3.506849-2.10411 4.909589-6.312329 2.805479-9.819178-2.10411-3.506849-6.312329-4.909589-9.819178-2.805479-8.416438 4.208219-17.534247 9.117808-25.950685 13.326027-3.506849 1.40274-4.909589 5.610959-3.506849 9.117808 2.10411 4.208219 6.312329 5.610959 9.819178 3.506849z m52.602739-27.353424c8.416438-4.909589 16.832877-10.520548 25.249316-15.430137 2.10411-1.40274 3.506849-4.208219 3.506849-6.312329 0-2.805479-2.10411-4.909589-4.208219-6.312329-2.10411-1.40274-4.909589-0.70137-7.715069 0.70137-8.416438 5.610959-16.131507 10.520548-24.547945 15.430137-3.506849 2.10411-4.208219 6.312329-2.10411 9.819178 2.10411 2.805479 6.312329 3.506849 9.819178 2.10411z m50.498631-32.964384c7.715068-5.610959 16.131507-11.923288 23.145205-18.936986 2.10411-1.40274 2.805479-4.208219 2.10411-7.013699-0.70137-2.805479-2.805479-4.909589-4.909589-5.610959-2.805479-0.70137-5.610959 0-7.013699 1.40274-7.013699 6.312329-14.728767 11.923288-22.443836 18.235617-2.805479 2.10411-3.506849 7.013699-1.402739 9.819178 2.805479 3.506849 7.013699 4.208219 10.520548 2.104109z m44.887671-39.276712c7.013699-7.013699 13.326027-14.728767 19.638356-23.145206 2.10411-3.506849 1.40274-7.715068-2.10411-9.819178-3.506849-2.10411-7.715068-1.40274-9.819178 1.40274-5.610959 7.715068-11.923288 14.728767-18.235616 21.742466-2.805479 2.805479-2.805479 7.013699 0 9.819178 3.506849 2.805479 7.715068 2.805479 10.520548 0z m35.769863-49.79726c-1.40274 2.10411-3.506849 4.208219-6.312329 4.208219s-5.610959-0.70137-7.013699-3.50685c-1.40274-2.10411-1.40274-4.909589-0.701369-7.013698 4.208219-8.416438 7.715068-16.832877 9.819178-25.950685 1.40274-3.506849 4.909589-6.312329 9.117808-4.909589 4.208219 0.70137 6.312329 4.909589 5.610959 8.416438-2.10411 10.520548-5.610959 20.339726-10.520548 28.756165z m14.728767-58.213699c-0.70137-11.221918-4.208219-21.742466-11.221918-30.860274-1.40274-2.10411-4.208219-3.506849-7.013698-2.805479-2.805479 0-4.909589 1.40274-6.312329 4.208219-1.40274 2.10411-0.70137 4.909589 0.70137 7.013698 4.909589 7.013699 7.715068 14.728767 8.416438 23.846576 0.70137 4.208219 4.208219 7.013699 7.715068 6.312328 4.909589-0.70137 7.715068-3.506849 7.715069-7.715068z m-36.471233-51.90137c-9.819178-4.909589-20.339726-7.715068-30.860274-9.819178-2.805479-0.70137-5.610959 0.70137-7.013699 2.805479-1.40274 2.10411-2.10411 4.909589-1.402739 7.013699 0.70137 2.10411 3.506849 4.208219 5.610959 4.208219 9.117808 1.40274 17.534247 4.208219 25.950685 7.715069 2.10411 1.40274 5.610959 1.40274 7.715068 0 2.10411-1.40274 3.506849-4.208219 3.506849-6.312329 0.70137-2.805479-1.40274-4.909589-3.506849-5.610959z m-63.824657-9.819178c-12.624658 2.10411-23.846575 7.013699-30.860274 13.326027-2.10411 1.40274-2.805479 4.208219-2.10411 7.013699 0.70137 2.805479 2.805479 4.208219 4.909589 4.909589 2.805479 0.70137 5.610959 0 7.013699-1.40274 4.909589-4.909589 13.326027-8.416438 23.145205-9.819178 2.805479-0.70137 4.909589-2.10411 5.610959-4.909589 0.70137-2.10411 0.70137-4.909589-1.40274-7.013698-1.40274-1.40274-4.208219-2.10411-6.312328-2.10411z m-39.978083 47.693151c2.805479 8.416438 8.416438 17.534247 16.832877 27.353424 2.805479 2.805479 7.715068 3.506849 10.520548 0.70137 2.805479-2.805479 3.506849-7.013699 0.70137-9.819178-7.715068-7.715068-11.923288-15.430137-14.027397-21.742466-0.70137-2.805479-2.805479-4.208219-5.610959-4.909589-2.805479-0.70137-5.610959 0-7.013699 2.10411-1.40274 1.40274-2.10411 4.208219-1.40274 6.312329z m41.380822 48.39452c9.117808 5.610959 18.936986 10.520548 28.756165 13.326028 4.208219 0.70137 7.715068-1.40274 9.117808-4.909589 1.40274-3.506849-1.40274-7.715068-4.909589-9.117809-9.117808-2.10411-17.534247-6.312329-24.547945-11.221917-3.506849-2.10411-7.715068-1.40274-9.819178 2.104109-2.805479 3.506849-1.40274 7.715068 1.402739 9.819178z m61.720548 16.832877c-2.805479 0-4.909589-1.40274-7.013698-3.506849-1.40274-2.10411-1.40274-4.909589 0-7.013699 1.40274-2.10411 3.506849-3.506849 6.312328-3.506849 9.117808-0.70137 18.235616-2.10411 27.353425-4.909589 2.805479-0.70137 5.610959 0 7.715069 1.402739 2.10411 1.40274 2.805479 4.208219 2.104109 7.013699-0.70137 2.805479-2.805479 4.909589-5.610959 4.909589-9.819178 3.506849-20.339726 4.909589-30.860274 5.610959z m61.019178-17.534247c9.117808-4.909589 17.534247-9.819178 25.950685-15.430137 2.805479-2.10411 3.506849-7.013699 1.40274-9.819178-2.10411-2.805479-7.013699-4.208219-9.819178-2.104109-8.416438 5.610959-16.131507 10.520548-24.547945 14.728767-2.10411 1.40274-4.208219 3.506849-4.20822 6.312329s1.40274 4.909589 3.50685 6.312328c2.805479 1.40274 5.610959 1.40274 7.715068 0z m49.095891-33.665753c7.715068-6.312329 14.728767-13.326027 21.742465-20.339726 2.805479-2.805479 2.805479-7.013699 0-9.819178-2.805479-2.805479-7.715068-2.805479-10.520547 0-7.013699 7.013699-14.027397 13.326027-21.041096 19.638356-2.805479 2.805479-3.506849 7.013699-0.70137 9.819178 2.805479 2.805479 7.715068 3.506849 10.520548 0.70137z m42.783561-42.082192c6.312329-7.715068 12.624658-14.728767 18.936987-22.443835 2.10411-2.805479 1.40274-7.715068-1.40274-9.819178-3.506849-2.10411-7.715068-2.10411-10.520548 1.402739-5.610959 7.715068-11.923288 14.728767-18.235616 22.443836-2.10411 2.805479-2.10411 7.715068 0.701369 9.819178 3.506849 1.40274 7.715068 1.40274 10.520548-1.40274z m37.172603-46.991781c5.610959-7.715068 11.221918-16.131507 16.131507-24.547945 0.70137-1.40274 1.40274-3.506849 0.70137-5.610959-0.70137-2.10411-1.40274-3.506849-3.50685-4.208219-1.40274-0.70137-3.506849-1.40274-5.610958-0.70137-2.10411 0.70137-3.506849 1.40274-4.909589 3.50685-4.909589 8.416438-10.520548 16.131507-15.430137 23.846575-1.40274 2.10411-2.10411 4.909589-0.70137 7.013699 1.40274 2.10411 3.506849 4.208219 6.312328 4.208219s5.610959-1.40274 7.013699-3.50685z m30.860274-49.79726c2.805479-5.610959 5.610959-10.520548 8.416438-16.131507 1.40274-3.506849 0-7.715068-3.506849-9.117808-3.506849-1.40274-7.715068-0.70137-9.819178 2.805479-2.805479 4.909589-5.610959 10.520548-8.416438 15.430137-0.70137 1.40274-1.40274 3.506849-0.70137 5.610959 0.70137 2.10411 2.10411 3.506849 3.506849 4.20822 1.40274 0.70137 3.506849 1.40274 5.610959 0.701369 2.10411-0.70137 3.506849-1.40274 4.909589-3.506849z" fill="#DBDDE8" p-id="32341"></path></svg>
       `;
    }
};