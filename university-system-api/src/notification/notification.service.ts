
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import type { EnrollmentService } from '../enrollment/enrollment.service.js';
@Injectable()
export class NotificationService {
 constructor(
  @Inject(forwardRef(() => 'ENROLLMENT_SERVICE'))
  private enrollmentService: EnrollmentService,
) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent successfully',
      student: studentName,
      notification: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollments = this.enrollmentService.getEnrollments();

    return {
      message: 'Enrollment checked and notification processed',
      student: studentName,
      courseId,
      enrollments,
    };
  }
}
