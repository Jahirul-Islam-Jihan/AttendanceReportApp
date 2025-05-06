import React from 'react';
import { Calendar, type DateData, type CalendarProps } from 'react-native-calendars';

type MarkedDates = CalendarProps['markedDates'];


interface AppCalendarProps {
  markedDates?: MarkedDates;
  onDateSelect?: (date: DateData) => void;
  minDate?: string;
  maxDate?: string;
  disableDates?: string[];
  initialDate?: string;
}

const AppCalendar: React.FC<AppCalendarProps> = ({
  markedDates = {},
  onDateSelect,
  minDate,
  maxDate,
  disableDates = [],
  initialDate,
}) => {
  // Combine markedDates with disabled dates
  const finalMarkedDates: MarkedDates = {
    ...markedDates,
    ...(disableDates.reduce((acc : any, date) => {
      acc[date] = { disabled: true, disableTouchEvent: true };
      return acc;
    }, {} as MarkedDates)),
  };

  return (
    <Calendar
      current={initialDate}
      minDate={minDate}
      maxDate={maxDate}
      onDayPress={onDateSelect}
      markedDates={finalMarkedDates}
      markingType="custom"
      headerStyle={{backgroundColor:"#00416A" }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00416A',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00416A',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        arrowColor: '#ffffff',
        monthTextColor: '#ffffff',
        indicatorColor: '#00416A',
        textDayFontWeight: '500',
        textMonthFontWeight: 'bold',
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 14,
      }}
      
    />
  );
};

export default AppCalendar;
