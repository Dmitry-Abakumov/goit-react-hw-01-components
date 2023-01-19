import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import { StatsText } from 'components/Statistics/Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title = null, stats }) => {
  return (
    <Box pt={25} pb={25} pl={15} as="section" textAlign="center">
      {title && <h2>{title}</h2>}

      <Box display="flex" justifyContent="center" p={20} as="ul">
        {stats.map(({ id, label, percentage }) => (
          <StatsText key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </StatsText>
        ))}
      </Box>
    </Box>
  );
};

export default Statistics;

Statistics.protoTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
