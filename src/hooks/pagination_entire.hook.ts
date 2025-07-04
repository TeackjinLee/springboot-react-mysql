import {useEffect, useState} from "react";

const usePaginationEntire = <T>(countPerPage: number, countPerSection: number) => {
    //      state: 전체 객체 리스트 상태     //
    const [totalList, setTotalList] = useState<T[]>([]);
    //      state: 보여줄 객체 리스트 상태        //
    const [viewList, setViewList] = useState<T[]>([]);
    //      state: 현재 페이지 번호 상태     //
    const [currentPage, setCurrentPage] = useState<number>(1);

    //      state: 젠체 페이지 번호 리스트 상태     //
    const [totalPageList, setTotalPageList] = useState<number[]>([1]);
    //      state: 보여줄 페이지 번호 리스트 상태     //
    const [viewPageList, setViewPageList] = useState<number[]>([1]);
    //      state: 현재 섹션 상태     //
    const [currentSection, setCurrentSection] = useState<number>(1);

    //      state: 전체 섹션 상태     //
    const [totalSection, setTotalSection] = useState<number>(1);

    //      function: 보여줄 객체 리스트 추출 함수      //
    const setView = () => {
        const FIRST_INDEX = countPerPage * (currentPage - 1);
        const LAST_INDEX = totalList.length > countPerPage * currentPage ? countPerPage * currentPage : totalList.length;
        const viewList = totalList.slice(FIRST_INDEX, LAST_INDEX);
        setViewList(viewList);
    };

    //      function: 보여줄 페이지 리스트 추출 함수     //
    const setViewPage = () => {
        const FIRST_INDEX = countPerSection * (currentSection - 1);
        const LAST_INDEX = totalPageList.length > countPerSection * currentSection ? countPerSection * currentSection : totalPageList.length;
        console.log(FIRST_INDEX, LAST_INDEX);
        console.log("totalPageList:::" + totalPageList + " countPerSection:::" + countPerSection + " currentSection:::" + currentSection);
        const viewPageList = totalPageList.slice(FIRST_INDEX, LAST_INDEX);
        setViewPageList(viewPageList);
    }


    //      effect: total list가 변경될 때마다 실행할 작업      //
    useEffect(() => {
        const totalPage = Math.ceil(totalList.length / countPerPage);   //  페이지 올림 처리
        const totalPageList: number[] = [];
        console.log("totalPage111:::" + totalPage);
        console.log("totalList111:::",totalList);
        console.log("countPerPage111:::",countPerPage);
        for (let page = 1; page <= totalPage; page++) totalPageList.push(page);
        setTotalPageList(totalPageList);

        const totalSection = Math.ceil(totalList.length / (countPerPage * countPerSection));
        setTotalSection(totalSection);

        setCurrentPage(1);
        setCurrentSection(1);

        setView();
        setViewPage();
    }, [totalList]);

    //      effect: current page가 변경될 때마다 실행할 작업    //
    useEffect(setView, [currentPage]);
    //      effect: current section가 변경될 때마다 실행할 작업    //
    useEffect(setViewPage, [currentPage]);

    return {
        currentPage,
        setCurrentPage,
        currentSection,
        setCurrentSection,
        viewList,
        setViewList,
        totalSection,
        viewPageList,
        setTotalList,
    };

};

export default usePaginationEntire;