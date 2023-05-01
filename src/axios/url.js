const userModuleUrl = 'http://localhost:7000/ums'
const medicalModuleUrl = 'http://localhost:7001/mms'
const url = {
    umsUserUrl:userModuleUrl + '/user',
    mmsSicknessUrl: medicalModuleUrl + '/sickness',
    umsRecordUrl:userModuleUrl + '/record',
    umsDoctorUrl:userModuleUrl + '/doctor',
    mmsSubjectUrl: medicalModuleUrl + '/subject',
    mmsFollowUrl: medicalModuleUrl + '/follow',
    mmsRecommendUrl: medicalModuleUrl + '/recommend',
}
export default url