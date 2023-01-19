import styled from '@emotion/styled'

export const UserInfo = styled.p`
    margin-top: 10px;
`

export const StatsList = styled.ul`
    display: flex;
    margin-top: 10px;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    :not(:last-child) {
        margin-right: 5px;
    }
`

export const Avatar = styled.img`
    width: 100px;
`
export const StatsText = styled.span`
    display: block;
`