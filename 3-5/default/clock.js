export default {
  label: 'Clock',
  id: 'clock',
  img: 'clock',
  grade: '0-3',
  list: [
    {
      type: 'clock',
      id: 'set-time-1hr',
      label: 'Set Time - Hours',
      data: { type: 'clockSetTime', duration: '1hr' }
    },
    {
      type: 'clock',
      id: 'write-time-1hr',
      label: 'Write Time - Hours',
      data: { type: 'clockReadTime', duration: '1hr' }
    },
    {
      type: 'clock',
      id: 'set-time-15mins',
      label: 'Set Time - Quarters',
      data: { type: 'clockSetTime', duration: '15mins' }
    },
    {
      type: 'clock',
      id: 'write-time-15mins',
      label: 'Write Time - Quarters',
      data: { type: 'clockReadTime', duration: '15mins' }
    },
    {
      type: 'clock',
      id: 'set-time-5mins',
      label: 'Set Time - Minutes',
      data: { type: 'clockSetTime' }
    },
    {
      type: 'clock',
      id: 'write-time-5mins',
      label: 'Write Time - Minutes',
      data: { type: 'clockReadTime' }
    }
  ]
};
