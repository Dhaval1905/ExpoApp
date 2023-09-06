import {useState} from 'react';
import {dateRange} from '../constants';

const useFilterData = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(dateRange?.[0]);
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [transactionTypeData, setTransactionTypeData] = useState({});
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [isFromDate, setIsFromDate] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [open, setOpen] = useState(false);

  return {
    open,
    toDate,
    fromDate,
    isFromDate,
    categoryOpen,
    dateRangeOpen,
    selectedCategory,
    selectedDateRange,
    transactionTypeData,
    setOpen,
    setToDate,
    setFromDate,
    setIsFromDate,
    setCategoryOpen,
    setDateRangeOpen,
    setSelectedCategory,
    setSelectedDateRange,
    setTransactionTypeData,
  };
};

export default useFilterData;
