import {useEffect, useState} from "react";

const usePagination = <T>(countPerPage: number, countPerSection: number) => {
    //      state: 전체 객체 리스트 상태     //
    const [totalList, setTotalList] = useState<T[]>([]);
    //      state: 전체 객체 숫자 상태      //
    const [totalElements, setTotalElements] = useState<number>(0);
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
        const viewList = totalList;
        setViewList(viewList);
    };

    //      function: 보여줄 페이지 리스트 추출 함수     //
    const setViewPage = () => {
        const FIRST_INDEX = countPerSection * (currentSection - 1);
        const LAST_INDEX = totalPageList.length > countPerSection * currentSection ? countPerSection * currentSection : totalPageList.length;
        const viewPageList = totalPageList.slice(FIRST_INDEX, LAST_INDEX);
        setViewPageList(viewPageList);
    }


    //      effect: total list가 변경될 때마다 실행할 작업      //
    useEffect(() => {
        const totalPage = Math.ceil(totalElements / countPerPage);   //  페이지 올림 처리
        const totalPageList: number[] = [];
        for (let page = 1; page <= totalPage; page++) totalPageList.push(page);
        console.log("totalPageList:::" + totalPageList);
        setTotalPageList(totalPageList);
        console.log("totalElements:::",totalElements,"countPerPage:::",countPerPage,"countPerSection:::",countPerSection)
        const totalSection = Math.ceil(totalElements / (countPerPage * countPerSection));
        console.log("totalSection:::" + totalSection);
        setTotalSection(totalSection);
        console.log("totalList:::" + totalList);
        console.log("viewList:::",viewList)
        setCurrentPage(currentPage);
        console.log("currentSection:::" + currentSection);
        setCurrentSection(currentSection);

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
        setTotalElements,
    };

};

export default usePagination;