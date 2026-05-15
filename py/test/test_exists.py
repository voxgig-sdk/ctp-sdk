# ProjectName SDK exists test

import pytest
from ctp_sdk import CtpSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CtpSDK.test(None, None)
        assert testsdk is not None
