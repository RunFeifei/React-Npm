import PropTypes from 'prop-types';
import {requireNativeComponent} from 'react-native';

import PieRadarChartBase from './PieRadarChartBase';
import {pieData} from './ChartDataConfig';

const iface = {
    name: 'PieChart',
    propTypes: {
        ...PieRadarChartBase.propTypes,

        drawEntryLabels: PropTypes.bool,
        usePercentValues: PropTypes.bool,

        centerText: PropTypes.string,
        styledCenterText: PropTypes.shape({
            text: PropTypes.string,
            color: PropTypes.number,
            size: PropTypes.number
        }),
        centerTextRadiusPercent: PropTypes.number,
        holeRadius: PropTypes.number,
        holeColor: PropTypes.number,
        transparentCircleRadius: PropTypes.number,
        transparentCircleColor: PropTypes.number,

        entryLabelColor: PropTypes.number,
        entryLabelTextSize: PropTypes.number,
        maxAngle: PropTypes.number,

        // TODO PieChart should have only one dataset
        data: pieData
    }
};

export default requireNativeComponent('RNPieChart', iface, {
    nativeOnly: {onSelect: true}
});
