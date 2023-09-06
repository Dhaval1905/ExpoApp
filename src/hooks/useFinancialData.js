import {useState} from 'react';
import {activity, dateRange} from '../constants';

const useFilterData = () => {
  const [visibleActivity, setVisibleActivity] = useState(false);
  const [visibleDateRange, setVisibleDateRange] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(activity?.[0]);
  const [selectedDateRange, setSelectedDateRange] = useState(dateRange?.[1]);

  return {
    visibleActivity,
    visibleDateRange,
    selectedActivity,
    selectedDateRange,
    setVisibleActivity,
    setVisibleDateRange,
    setSelectedActivity,
    setSelectedDateRange,
  };
};

export default useFilterData;
